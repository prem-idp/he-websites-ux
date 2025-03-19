interface FavouriteLimitExceededProps {
    onClose: () => void
}

const FavouriteLimitExceeded: React.FC<any> = ({ onClose }) => {
    return (
        <div className="modal modal-container relative top-0 right-0 bottom-0 z-[5]">
            <div

                className="backdrop-shadow fixed top-0 right-0 left-0 bottom-0 bg-white"
            ></div>
            <div className="modal-box shadow-custom-6 w-[343px] md:w-[512px] p-[24px] bg-white rounded-[8px] fixed top-[30%] translate-y-[30%] left-0 right-0 mx-auto">
                <div
                    onClick={onClose}
                    className="modal_close flex items-center justify-center absolute top-[16px] right-[16px] z-[1] cursor-pointer"
                >
                    <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            className="stroke-grey-400"
                            d="M1 13L13 1M1 1L13 13"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
                <div className="review-modal-container flex flex-col gap-[16px]]">
                    <div className="mb-[4px] para-lg font-semibold">
                        Maximum number of favourites
                    </div>
                    <p className="small text-grey-500">
                        You can only favourite a max of 30 unis and courses. Remove
                        a selection to add another
                    </p>
                    <button
                        type="button"
                        onClick={onClose}
                        className="btn btn-primary w-fit mt-[24px] ml-auto"
                    >
                        Ok, got it
                    </button>
                </div>
            </div>
        </div>
    )
}

export default FavouriteLimitExceeded;