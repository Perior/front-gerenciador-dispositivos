
const Bar = (setSearchTerm) => {
    return (
        <form role="search" method="get">
            <div>
                <input type="search" id="search-device"
                placeholder="Search for device..."
                onChange={(event) => {
                    setSearchTerm(event.target.value);
                    console.log(event.target.value);
                }}
                />

                <button className="search-button" type="button">Search</button>
            </div>
        </form>
    )
};

export default Bar;