import { Controller, useForm } from "react-hook-form";
import { PersonalizedInterface } from "@_src/types/interface";
import { useState } from "react";
import { toast } from "react-toastify"
import axios from 'axios'
export const Form = () => {

  const [ selectedImage, setSelectedImage ] = useState<any>()
  const [ errorList, setErrorList ] = useState<string[]>()
  const {
    handleSubmit,
    control,
    setValue,
    watch,
    formState : { errors }
  } = useForm<PersonalizedInterface>({
    defaultValues: {
      orderNumber: '',
      item: '',
      text: '',
      image: null
    },
  });

  const validateFileType = (file: FileList | undefined) => {
    if(file) {
      const filetype = file[0].type.split("/")
      if(filetype[filetype.length - 1].toLowerCase() === 'webp') {
        return true
      }
      return false
    }
  }

  const resetForm = ():void => {
    setValue("orderNumber", '')
    setValue("item", '')
    setValue("text", '')
    setValue("image", null)

  }

  const onSubmit = async (data: PersonalizedInterface) => {

    const { orderNumber, item, text, image } = data 
    if(image && validateFileType(image) == false) { return toast("type of your file must be in webp format", { type: "warning" }) }
    let config = {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    } 

    let formdata = new FormData()
    formdata.append('order_name', orderNumber)
    formdata.append('item', item)
    formdata.append('text', text)
    image && formdata.append('media', image[0], image[0].name)
    
    const result = await axios.post('https://devapi.flowerstore.ph/v2/personalized-order/store', formdata, config).then(res => {
      res && toast(res.data.message, { type: "success" })
      resetForm()
      return res.data
    }).catch(err => {
        setErrorList(err.response.data.message)
    })
    return result
  }


  return (
    <div className="form_main_container lg:col-span-2">
      <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
        <div className="md:col-span-5">
          <label htmlFor="order">Order Number *</label>
            <Controller
              control={control}
              rules={{
                required: true,
                pattern : /[\S\s]+[\S]+/
              }}
              render={({ field: { onChange, value } }) => (
                <input 
                  value={value}
                  onChange={onChange}
                  type="text" 
                  name="order" id="order" 
                  className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                  />
                
              )}
              name="orderNumber"
            />
          { errors.orderNumber && <p className="text-red-400 indent-2 text-sm">order number is invalid*</p> }
          { errorList?.length && (
            errorList.map((message, index) => {
              return (
                <p key={index} className="text-red-400 indent-2 text-sm">
                  {message}
                </p>
              )
            })
          )}
        </div>

        <div className="md:col-span-5">
          <label htmlFor="product">Item/Product</label>
          <Controller
              control={control}
              rules={{
                required: true,
                pattern : /[\S\s]+[\S]+/
              }}
              render={({ field: { onChange, value } }) => (
                <input 
                  value={value}
                  onChange={onChange}
                  type="text" 
                  name="item" id="item" 
                  className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                  />
                
              )}
              name="item"
            />
          { errors.item && <p className="text-red-400 indent-2 text-sm">product is invalid*</p> }
        </div>

        <div className="md:col-span-5">
          <label htmlFor="text_personalization" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">If your item requires <b>text personalization</b>, kindly include it here.</label>
          <Controller
              control={control}
              rules={{
                required: true,
                pattern : /[\S\s]+[\S]+/
              }}
              render={({ field: { onChange, value } }) => (
                <textarea
                  value={value}
                  onChange={onChange}
                  name="text_personalization" 
                  id="text_personalization"
                  className="pl-2 w-full border-b-2 border-gray-200 bg-transparent font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-brand focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
                  placeholder="Your answer"
                /> 
              )}
              name="text"
            />
          { errors.text && <p className="text-red-400 indent-2 text-sm">text is invalid*</p> }
        </div>

        <div className="md:col-span-5">
          <label htmlFor="image_personalization" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">If your item requires <b>image personalization</b>, kindly include it here.</label>
          <Controller
              control={control}
              rules={{
                required: true,
              }}
              defaultValue={null}
              render={({ field: { onChange, onBlur, ref } }) => (
                <input
                  className="form-control"
                  accept="image"
                  onBlur={onBlur}
                  ref={ref}
                  type="file"
                  onChange={(e) => {
                    if(e.target.files && e.target.files.length > 0) {
                      onChange(e.target.files)
                      setSelectedImage(e.target.files[0])
                    }
                  }}
              />
              )}
              name="image"
            />
          { errors.image && <p className="text-red-400 indent-2 text-sm">image is invalid*</p> }
        </div>
        
        {selectedImage && watch("image") && (
          <div className="mt-2 flex flex-col">
            <img
              className="max-w-[100%] max-h-[320]" 
              src={URL.createObjectURL(selectedImage)}
              alt="Thumb"
            />
          </div>
        )}

        <div className="md:col-span-5 text-right mt-3">
          <div className="inline-flex items-end">
            <button 
              onClick={handleSubmit((data) => onSubmit(data))}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
