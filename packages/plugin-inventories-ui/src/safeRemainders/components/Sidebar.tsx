import ControlLabel from '@erxes/ui/src/components/form/Label';
import FormGroup from '@erxes/ui/src/components/form/Group';
import { __ } from '@erxes/ui/src/utils';
import React from 'react';
import SelectBranches from '@erxes/ui/src/team/containers/SelectBranches';
import SelectDepartments from '@erxes/ui/src/team/containers/SelectDepartments';
import { PaddingTop } from '../../styles';
import { router } from '@erxes/ui/src/utils/core';
import { Wrapper } from '@erxes/ui/src/layout';
import SelectProducts from '@erxes/ui-products/src/containers/SelectProducts';
import Datetime from '@nateradebaugh/react-datetime';
import * as dayjs from 'dayjs';

function Sidebar({ history, queryParams }: { history: any; queryParams: any }) {
  const setFilter = (name, value) => {
    router.setParams(history, { [name]: value });
  };

  const onChangeDate = (lbl, date) => {
    console.log(lbl, date);
    const cDate = dayjs(date).format('YYYY-MM-DD HH:mm');
    router.setParams(history, { [lbl]: cDate });
  };

  return (
    <Wrapper.Sidebar>
      <PaddingTop>
        <FormGroup>
          <ControlLabel>{__('Begin Date')}</ControlLabel>
          <Datetime
            inputProps={{ placeholder: 'Click to select a date' }}
            dateFormat="YYYY-MM-DD"
            timeFormat="HH:mm"
            value={queryParams.beginDate || null}
            closeOnSelect={true}
            utc={true}
            input={true}
            onChange={date => onChangeDate('beginDate', date)}
            viewMode={'days'}
          />
        </FormGroup>
        <FormGroup>
          <ControlLabel>{__('End Date')}</ControlLabel>
          <Datetime
            inputProps={{ placeholder: 'Click to select a date' }}
            dateFormat="YYYY-MM-DD"
            timeFormat="HH:mm"
            value={queryParams.beginDate || null}
            closeOnSelect={true}
            utc={true}
            input={true}
            onChange={date => onChangeDate('endDate', date)}
            viewMode={'days'}
          />
        </FormGroup>
        <FormGroup>
          <ControlLabel>{__('Branch')}</ControlLabel>
          <SelectBranches
            label="Choose branch"
            name="selectedBranchIds"
            initialValue={queryParams.branchId}
            onSelect={branchId => setFilter('branchId', branchId)}
            multi={false}
            customOption={{ value: '', label: 'All branches' }}
          />
        </FormGroup>
        <FormGroup>
          <ControlLabel>{__('Department')}</ControlLabel>
          <SelectDepartments
            label="Choose department"
            name="selectedDepartmentIds"
            initialValue={queryParams.departmentId}
            onSelect={departmentId => setFilter('departmentId', departmentId)}
            multi={false}
            customOption={{ value: '', label: 'All departments' }}
          />
        </FormGroup>
        <FormGroup>
          <ControlLabel>{__('Product')}</ControlLabel>
          <SelectProducts
            label="Choose product"
            name="selectedProductId"
            initialValue={queryParams.productId}
            onSelect={productId => setFilter('productId', productId)}
            multi={false}
            customOption={{ value: '', label: 'All products' }}
          />
        </FormGroup>
      </PaddingTop>
    </Wrapper.Sidebar>
  );
}

export default Sidebar;