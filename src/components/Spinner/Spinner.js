const Spinner = () => {
    return (
        <div className="fixed top-0 left-0 w-screen h-screen z-10 bg-white">
            <div className="w-full h-full flex items-center justify-center ">
                <div className="w-24 h-24 border-l-4 border-gray-900 rounded-full animate-spin"></div>
            </div>
        </div>
    );
}

export default Spinner;