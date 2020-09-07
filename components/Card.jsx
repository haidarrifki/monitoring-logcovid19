export default function Card({ title, body, className }) {
  return (
    <div className="w-full md:w-1/2 xl:w-1/3 p-3">
        
        <div className={className}>
            <div className="flex flex-row items-center">
                <div className="flex-1 text-center">
                    <h5 className="font-bold uppercase text-gray-600">{ title }</h5>
                    <h3 className="font-bold text-3xl">{ body }</h3>
                </div>
            </div>
        </div>
        
    </div>
  )
}