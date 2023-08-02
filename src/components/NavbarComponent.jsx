import React, { Fragment } from 'react';
import { NAVIGATIONS } from '../utils/navigations';
import { ButtonComponent } from './generic/ButtonComponent';


export const NavbarComponent = () => {
  return (
    <div className='flex items-center text-primary-100 px-150 py-24 gap-48 sticky top-0 bg-transparent -mb-[104px] font-body-text text-[20px]'>
      <div className='font-[700] w-[250px] uppercase '>
        Reno Angelo
      </div>

      <div className='flex justify-end w-full'>
        <ul className='flex justify-center items-center gap-[30px] text-body-text font-[600] '>
          {
            NAVIGATIONS.map((items, index) => (
              <li key={index}>
                <a href={items.path}>{items.name}</a>
              </li>
            ))
          }
        </ul>
      </div>

      <ButtonComponent style={'w-[184px]'} >
        Resume
      </ButtonComponent>
    </div>
  );
}