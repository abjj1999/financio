import React from 'react'
import { FormControl, FormField, FormLabel, FormMessage } from './ui/form'
import { Input } from './ui/input'
// import { Input } from 'postcss'
import { z } from 'zod'


import  {Form, Control, FieldPath} from 'react-hook-form'
import { authFormSchema } from '@/lib/utils'

interface CustomInputProps {
    control: Control<z.infer<typeof authFormSchema>>,
    name: FieldPath<z.infer<typeof authFormSchema>>,
    label: string,
    placeholder: string
}

const CustomInput = ({control, name, label, placeholder}: CustomInputProps) => {
  return (
    <div>
      <FormField
                  control={control}
                  name={name}
                  render={({ field }) => (
                    <div className="form-item">
                      <FormLabel className="form-label">{label}</FormLabel>
                      <div className="flex w-full flex-col">
                        <FormControl>
                          <Input
                            {...field}
                            type={name === "password" ? "password" : "text"}
                            placeholder={placeholder}
                            className="input-class"
                          />
                        </FormControl>
                        <FormMessage className="form-message mt-2"/>
                      </div>
                    </div>
                  )}
                />
    </div>
  )
}

export default CustomInput
