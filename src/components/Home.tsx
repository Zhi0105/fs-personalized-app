import { Introduction } from "./Partial/Introduction"
import { Form } from "./Partial/Form"

export const Home = () => {
  return (
    <div className="home_main min-h-screen p-6 bg-gray-100 flex items-center justify-center">
      <div className="container max-w-screen-lg mx-auto">
        <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
          <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
            <Introduction />
            <Form />
          </div>
        </div>
      </div>
    </div>
  )
}