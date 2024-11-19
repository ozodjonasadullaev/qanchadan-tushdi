import { useState } from "react"
import { Checkbox } from "./components/ui/checkbox"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "./components/ui/select"
import { Input } from "./components/ui/input"

type MealType = {
  id: number
  price: number
  name: string
}

const people = [
  {
    id: 1,
    name: "Ozodjon",
    checked: false
  },
  {
    id: 2,
    name: "Doston",
    checked: false
  },
  {
    id: 3,
    name: "Abdulhakim",
    checked: false
  },
  {
    id: 4,
    name: "Javohir",
    checked: false
  },
]

const meals: MealType[] = [
  {
    id: 1,
    name: "Tabaka",
    price: 28000
  },
  {
    id: 2,
    name: "Osh",
    price: 28000
  },
  {
    id: 3,
    name: "Somsa",
    price: 28000
  },
]

function App() {
  const [users, setUsers] = useState(people)
  const [orders, setOrders] = useState<{ user: number, meals: MealType[] }[]>([])


  return (
    <div className='px-8 py-4'>
      <h1 className="mb-5">
        Qanchadan tushdi bot
      </h1>
      <ul>
        {users.map((user) => (
          <li key={user.id} className="flex border-b border-b-gray-400 py-3 items-center gap-2">
            <Checkbox />
            <div className="flex h-full w-full items-center gap-2">
              <span className="w-40">{user.name}</span>
              {Array(5).fill(1).map((_, i) =>
                <Select key={`${user.id}-meal-${i}`} onValueChange={(a) => console.log(a)} >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select a meal" />
                  </SelectTrigger>
                  <SelectContent>
                    {meals.map(meal => <SelectItem value={`${meal.id}`}>{meal.name}</SelectItem>)}
                  </SelectContent>
                </Select>
              )}
              <div className="ml-auto">54 000</div>
            </div>
          </li>
        ))}
      </ul>
      <h2 className="mt-3">Umumiy Xarajatlar</h2>
      <div className="flex gap-4 mt-2">
        <Input className="w-1/4" />
        <div className="flex gap-5 w-full">
          {users.map((user) => (
            <div className="flex items-center gap-2">
              <Checkbox />
              <span>{user.name}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-4 mt-2">
        <Input className="w-1/4" />
        <div className="flex gap-5 w-full">
          {users.map((user) => (
            <div className="flex items-center gap-2">
              <Checkbox />
              <span>{user.name}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-4 mt-2">
        <Input className="w-1/4" />
        <div className="flex gap-5 w-full">
          {users.map((user) => (
            <div className="flex items-center gap-2">
              <Checkbox />
              <span>{user.name}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between mt-6 text-3xl">
        <h2 className="">Total</h2>
        <div>314 000</div>
      </div>
    </div>
  )
}

export default App
