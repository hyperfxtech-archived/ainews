export default () => {
    return (
        <nav className="site-header sticky-top py-1"
              style={{background: '#eff8ff'}}>
        <div className="container d-flex flex-column flex-md-row justify-content-between">
          <a className="py-2" href="#">
            <img  style={{ width:'4em'}} src="../static/img/bee.png" />
          </a>
          <a className="py-2 d-md-inline-block" href="#">Home</a>
          <a className="py-2 d-md-inline-block" href="#">Product</a>
          <a className="py-2 d-md-inline-block" href="#">Features</a>
          <a className="py-2 d-md-inline-block" href="#">Enterprise</a>
          <a className="py-2 d-md-inline-block" href="#">Support</a>
        </div>
      </nav>
      
    )

}