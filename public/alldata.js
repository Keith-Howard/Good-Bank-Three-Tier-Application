function AllData() {
    const loggedInCtx = React.useContext(LoginUserContext);
    const [data, setData] = React.useState('');

    React.useEffect(() => {
        //fetch all accounts from API
        fetch(`/account/all/${loggedInCtx.email}/${loggedInCtx.password}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setData(data);
            })
    }, [])
    function getTableData() {
        let tableString = "";
        if (data !== '') {
            for (const user of data) {
                tableString = tableString + 
                `<tr>
                    <td>${user.name}</td>
                    <td>${user.email}</td>
                    <td>${user.password}</td>
                    <td>${user.balance}</td>
                </tr>`
            }
        }
        console.log(tableString);
        return window.HTMLReactParser(tableString)
    }  
    return (
        <Card
            bgcolor="danger"
            header="All Data"
            status=""
            cardWidth='50rem'
            body={loggedInCtx.email === '' ? (
                <>
                    <h2>LOGIN TO USE FEATURE</h2>
                </>
            ):(
                <>
                    <table className='table'>
                        <thead className="thead-light">
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Password</th>
                                <th scope="col">Balance</th>
                            </tr>
                        </thead>
                        <tbody className="table-light">
                            {getTableData()}
                        </tbody>
                    </table>
                </>
            )}
        />
    )
}