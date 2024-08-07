
export const Form = () => {
  return (
    <div className="form_main_container lg:col-span-2">
      <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
        <div className="md:col-span-5">
          <label htmlFor="order">Order Number *</label>
          <input type="text" name="order" id="order" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value="" />
        </div>

        <div className="md:col-span-5">
          <label htmlFor="product">Item/Product</label>
          <input type="text" name="product" id="product" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value="" />
        </div>

        <div className="md:col-span-5">
          <label htmlFor="text_personalization" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">If your item requires <b>text personalization</b>, kindly include it here.</label>
          <textarea id="text_personalization" 
            className="pl-2 w-full border-b-2 border-gray-200 bg-transparent font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-brand focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
            placeholder="Your answer"
          /> 
        </div>

        <div className="md:col-span-5 text-right mt-3">
          <div className="inline-flex items-end">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}
