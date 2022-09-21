function CreateAccount(){
    const [show, setShow]     = React.useState(true);
    const [status, setStatus] = React.useState('');
    const [name, setName]         = React.useState('');
    const [email, setEmail]       = React.useState('');
    const [password, setPassword] = React.useState(''); 
  
    return (
      <Card
        bgcolor="primary"
        header="Create Account"
        status={status}
        cardWidth='25rem'
        body={show ? 
          <CreateForm setShow={setShow} setStatus={setStatus} setName={setName}
          setEmail={setEmail} setPassword={setPassword} name={name}
          email={email} password={password}/> : 
          <CreateMsg setShow={setShow} setName={setName}
          setEmail={setEmail} setPassword={setPassword}/>}
      />
    )
  }
  
  function CreateMsg(props){
    return(<>
      <h5>Success</h5>
      <button type="submit" 
        className="btn btn-light" 
        onClick={() => {
          props.setShow(true);
          props.setName('');
          props.setEmail('');
          props.setPassword('');
          }}>Add another account</button>
    </>);
  }
  
  function CreateForm(props){
    //const [name, setName]         = React.useState('');
    //const [email, setEmail]       = React.useState('');
    //const [password, setPassword] = React.useState(''); 
  
    function handle() {
      console.log(props.name, props.email, props.password);
      const url = `/account/create/${props.name}/${props.email}/${props.password}`;
      (async () => {
        var res = await fetch(url);
        var data = await res.json();
        console.log('handle func ' + JSON.stringify(data));
        if (data.error !== '') {
          props.setShow(true);
          props.setStatus(data.error);
        } else{
          props.setShow(false);
          props.setStatus('');
        }
      })();
    }
  
    return (<>
  
      Name<br/>
      <input type="input" 
        className="form-control" 
        placeholder="Enter name" 
        value={props.name} 
        onChange={e => props.setName(e.currentTarget.value)} /><br/>
  
      Email address<br/>
      <input type="input" 
        className="form-control" 
        placeholder="Enter email" 
        value={props.email} 
        onChange={e => props.setEmail(e.currentTarget.value)}/><br/>
  
      Password<br/>
      <input type="password" 
        className="form-control" 
        placeholder="Enter password" 
        value={props.password} 
        onChange={e => props.setPassword(e.currentTarget.value)}/><br/>
  
      <button type="submit" 
        className="btn btn-light" 
        onClick={handle}>Create Account</button>
  
    </>);
  }
