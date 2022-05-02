import { moduleCheckPermission } from '@erxes/api-utils/src/permissions';
import { WEBHOOK_STATUS } from '../../../models/definitions/constants';
import { IWebhook } from '../../../models/definitions/webhook';
// import { MODULE_NAMES } from '../../constants';
// import { putCreateLog, putDeleteLog, putUpdateLog } from '../../logUtils';
import { IContext } from '../../../connectionResolver';
import { sendRequest } from "@erxes/api-utils/src";

interface IWebhookEdit extends IWebhook {
  _id: string;
}

const webhookMutations = {
  /**
   * Creates a new webhook
   */
  async webhooksAdd(_root, doc: IWebhook, { user, docModifier, models }: IContext) {
    const webhook = await models.Webhooks.createWebhook(docModifier(doc));

    sendRequest({
      url: webhook.url,
      headers: {
        'Erxes-token': webhook.token || ''
      },
      method: 'post',
      body: {
        text: 'You have successfully connected erxes webhook'
      }
    })
      .then(async () => {
        await models.Webhooks.updateStatus(webhook._id, WEBHOOK_STATUS.AVAILABLE);
      })
      .catch(async () => {
        await models.Webhooks.updateStatus(webhook._id, WEBHOOK_STATUS.UNAVAILABLE);
      });

    // await putCreateLog(
    //   {
    //     type: MODULE_NAMES.WEBHOOK,
    //     newData: webhook,
    //     object: webhook,
    //     description: `${webhook.url} has been created`
    //   },
    //   user
    // );

    return webhook;
  },

  /**
   * Edits a webhook
   */
  async webhooksEdit(_root, { _id, ...doc }: IWebhookEdit, { user, models }: IContext) {
    const webhook = await models.Webhooks.getWebHook(_id);
    const updated = await models.Webhooks.updateWebhook(_id, doc);

    // await putUpdateLog(
    //   {
    //     type: MODULE_NAMES.WEBHOOK,
    //     object: webhook,
    //     newData: doc,
    //     description: `${webhook.url} has been edited`
    //   },
    //   user
    // );

    return updated;
  },

  /**
   * Removes a webhook
   */
  async webhooksRemove(_root, { _id }: { _id: string }, { models, user }: IContext) {
    const webhook = await models.Webhooks.getWebHook(_id);
    const removed = await models.Webhooks.removeWebhooks(_id);

    // await putDeleteLog(
    //   {
    //     type: MODULE_NAMES.WEBHOOK,
    //     object: webhook,
    //     description: `${webhook.url} has been removed`
    //   },
    //   user
    // );

    return removed;
  }
};

moduleCheckPermission(webhookMutations, 'manageWebhooks');

export default webhookMutations;

