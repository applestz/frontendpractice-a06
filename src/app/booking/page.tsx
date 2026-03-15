import DateReserve from "@/components/DateReserve";

export default function Booking() {
    return (
        <main className="w-[100%] flex flex-col items-center space-y-4">
            <div className="text-xl font-medium">
                Venue Booking
            </div>
            <div className="w-fit space-y-2">
                <DateReserve/>
            </div>
            <button name="Book Venue"
            className="block rounded-md bg-sky-600 hover:bg-indigo-600
            px-3 py-2 text-white shadow-sm">
                Book Venue
            </button>

        </main>
    )
}