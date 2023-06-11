import { useState } from 'react';
import useQuoter from "../hooks/useRepo";
import { ChevronDown } from './Chevron';

interface Props {
    title: string;
    children: React.ReactNode;
}

const ToggleItem = ({ title, children }: Props) => {
    const [isOpen, setIsOpen] = useState(false);
    const { requestRepos } =  useQuoter();

    return (
        <div className="border-b">
            <button
                className="w-full text-base capitalize text-gray-700 flex justify-between items-center py-4 cursor-pointer select-none px-2"
                onClick={() => {
                    setIsOpen((p) => !p);
                    requestRepos(title) }
                }
                type="button"
            >
                {title}
                <div className={`duration-200 ${isOpen ? 'rotate-180' : ''}`}>
                    <ChevronDown height="16" width="16" />
                </div>
            </button>
            <div
                className={`grid duration-200 ${
                    isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                }`}
            >
                <div className="overflow-hidden">{children}</div>
            </div>
        </div>
    );
};

export default ToggleItem;