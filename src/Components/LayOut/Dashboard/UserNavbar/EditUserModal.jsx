import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import React from 'react';
import {RxCross1} from 'react-icons/rx';
import { NavLink } from 'react-router-dom';

const EditUserModal = ({ closeModal, isOpen,user}) => {

    return (
        <Transition appear show={isOpen} as={Fragment}>
        <Dialog as='div' className='relative z-10' onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black bg-opacity-25' />
          </Transition.Child>
  
          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex min-h-full items-center justify-center p-4 text-center'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                <Dialog.Panel className='w-screen max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-center align-middle shadow-xl transition-all'>
                <RxCross1
                      className=' '
                      onClick={closeModal}
                    >
                    </RxCross1>
                  
 <ul  className=" text-slate-500 text-center ">
<p className="py-2 text-lg  text-slate-900">Hi, {user?.displayName}</p>


         <li> <NavLink
            to="/profile"
            title="Profile"
 className={({ isActive }) =>
                isActive ? " text-black font-bold" : "default"
              }          >
           Profile
          </NavLink> </li>
      <li> <NavLink
            to="/dashboard"
            title="Dashboard"
 className={({ isActive }) =>
                isActive ? " text-black font-bold" : "default"
              }
          >
           Dashboard
          </NavLink> </li>
  <li> <NavLink
            to="/project"
            title="Project"
 className={({ isActive }) =>
                isActive ? " text-black font-bold" : "default"
              }          
          >
          My Project
          </NavLink> </li>
     <li> <NavLink
            to="/presets"
            title="Presets"
 className={({ isActive }) =>
                isActive ? " text-black font-bold" : "default"
              }
          >
            Brand Presets
          </NavLink> </li>
     <li> <NavLink
            to="/teamSettings"
            title="Team Settings" 
 className={({ isActive }) =>
                isActive ? " text-black font-bold" : "default"
              }
          >
             Team Settings
          </NavLink> </li>
      <li> <NavLink
            to="/purchased"
            title="Purchase"
 className={({ isActive }) =>
                isActive ? " text-black font-bold" : "default"
              }
          >
             Purchased
          </NavLink> </li>
     <li> <NavLink
            to="/FaQ"
            title="FaQ"
 className={({ isActive }) =>
                isActive ? " text-black font-bold" : "default"
              }
          >
             FaQ
          </NavLink> </li>
       
</ul> 
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    );
};

export default EditUserModal;