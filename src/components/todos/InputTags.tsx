// MultiInputTag.js
import React, { useState } from 'react';
import {  useFormContext, useFieldArray } from 'react-hook-form';
import { ITodo } from '../../interface/interfaces';
import { X } from 'lucide-react';
import ErrorMsg from '../errorMsg';


const InputTag: React.FC = () => {
  const { control } = useFormContext<ITodo>();

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'tags',
  });

  const handleTagRemove = (indexToRemove: number) => {
    remove(indexToRemove);
  };

  const [err,setErr] = useState<boolean>(false)
  return (

      <div className='flex flex-col justify-start space-y-3'>
        <input
          type="text"
          className='rounded-md p-2'
          placeholder="Type and press Enter to add tags"
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault(); 
              if(e.currentTarget.value === ''){
                setErr(true)
              }else{
                setErr(false)
                append({ id: Date.now().toString(), name: e.currentTarget.value });
              e.currentTarget.value = '';
              }
              
            }
          }}
        /> 
        {err? <ErrorMsg  msg='pleasefill a tag to add it '/> : ''}
        <div className='flex gap-1 max-h-24  overflow-y-auto justify-start flex-wrap'>
          {fields.map((tag, index) => (
            <div key={tag.id} className="flex justify-center text-[#3e3e3e] rounded-full px-2 border bg-yellow-200 p-1  items-center gap-2">
              <span>{tag.name}</span>
              <button type="button"className='' onClick={() => handleTagRemove(index)}>
                <X size={16} color='#ff0000'/>
              </button>
            </div>
          ))}
        </div>
      </div>

     

  );
};

export default InputTag;
