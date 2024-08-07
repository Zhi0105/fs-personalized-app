
export const Introduction = () => {
  return (
    <div className="intro_main grid grid-cols-1 divide-y gap-4">
      <div className="text-black text-base">
        <p className="font-bold text-lg">Personalized details</p>
        <p className="mt-5">Please complete the form with your personalized details. For each item specific instructions, kindly refer to the product page. If you have previously shared the details with our team, you may disregard this form.</p>            
      </div>
      <div className="text-sx text-red-400">
        <p>* Indicates required question</p>
      </div>
    </div>
  )
}
