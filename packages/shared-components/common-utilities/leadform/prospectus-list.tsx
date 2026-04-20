import Image from "next/image";

interface ProspectusItem {
  logoSrc: string;
  name: string;
  type: string;
}

interface ProspectusListProps {
  items: ProspectusItem[];
  onRemove?: (index: number) => void;
}

const ProspectusList = ({ items, onRemove }: ProspectusListProps) => (
  <div className="bg-white flex flex-col gap-[16px] p-[24px_16px] md:p-[40px_20px] lg:p-[40px_32px]">
    <h3 className="h5 font-bold">Prospectuses</h3>
    <div className="flex flex-col gap-[8px]">
      {items.map((item, index) => (
        <div
          key={index}
          className="flex items-center justify-between border border-grey-200 rounded-[8px] p-[16px]"
        >
          <div className="flex items-center gap-[12px]">
            <div className="w-[64px] h-[64px] p-[4px] rounded-[4px] bg-white shadow-custom-4 flex items-center justify-center shrink-0">
              <Image
                src={item.logoSrc}
                alt={`${item.name} logo`}
                width={48}
                height={48}
              />
            </div>
            <div className="flex flex-col">
              <span className="small font-semibold">{item.name}</span>
              <span className="x-small text-grey-600">{item.type}</span>
            </div>
          </div>
          {onRemove && (
            <button
              type="button"
              className="p-[8px] shrink-0"
              onClick={() => onRemove(index)}
              aria-label={`Remove ${item.name}`}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 4L4 12M4 4L12 12"
                  stroke="#333F48"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          )}
        </div>
      ))}
    </div>
  </div>
);

export default ProspectusList;
