// src/components/sorting-filter/RadioFilterGroup.tsx
"use client";

import React from "react";

interface RadioFilterGroupProps {
    title: string;
    options: Record<string, string>;
    selectedValue: string | null;
    onSelect: (value: string, label: string) => void;
    name: string;
}

const RadioFilterGroup: React.FC<RadioFilterGroupProps> = ({
    title,
    options,
    selectedValue,
    onSelect,
    name,
}) => (
    <>
        {
            Object.entries(options).map(([label, value]) => (
                <div
                    key={`${name}-${label}`}
                    className="custom-radio"
                    onClick={() => onSelect(value, label)}
                >
                    <input
                        type="radio"
                        id={value}
                        name={name}
                        checked={
                            value === selectedValue ||
                            (value === "r" && !selectedValue) // Default to "Recommended" if no value
                        }
                        readOnly
                    />
                    <label htmlFor={label} className="flex items-center">
                        {label}
                    </label>
                </div>
            ))
        }
    </>
);

export default RadioFilterGroup;