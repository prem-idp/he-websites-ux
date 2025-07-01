import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";

const DateRangePicker = () => {
    const [startDate, setStartDate] = useState<Date | undefined>(new Date());
    const [endDate, setEndDate] = useState<Date | undefined>(undefined);

    return (
        <div className="flex gap-4 items-center">
            <div className="flex flex-col">
                <label htmlFor="from" className="text-sm font-medium text-gray-600">From</label>
                <DatePicker
                    selected={startDate}
                    onChange={(date: Date | null) => setStartDate(date ?? undefined)}
                    selectsStart
                    startDate={startDate}
                    endDate={endDate}
                    dateFormat="dd/MM/yyyy"
                    className="border border-gray-300 px-3 py-2 rounded-md w-40"
                />
            </div>
            <div className="flex flex-col">
                <label htmlFor="to" className="text-sm font-medium text-gray-600">To</label>
                <DatePicker
                    selected={endDate}
                    onChange={(date: Date | null) => setEndDate(date ?? undefined)}
                    selectsEnd
                    startDate={startDate}
                    endDate={endDate}
                    minDate={startDate}
                    dateFormat="dd/MM/yyyy"
                    className="border border-gray-300 px-3 py-2 rounded-md w-40"
                />
            </div>
        </div>
    )
}

export default DateRangePicker