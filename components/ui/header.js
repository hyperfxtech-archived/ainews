export default () => {
    return (
        <nav class="site-header sticky-top py-1">
        <div class="container d-flex flex-column flex-md-row justify-content-between">
          <a class="py-2" href="#">
            <img  style={{ width:'50px'}} src="../static/img/bee.png" />
          </a>
          <a class="py-2 d-none d-md-inline-block" href="#">Tour</a>
          <a class="py-2 d-none d-md-inline-block" href="#">Product</a>
          <a class="py-2 d-none d-md-inline-block" href="#">Features</a>
          <a class="py-2 d-none d-md-inline-block" href="#">Enterprise</a>
          <a class="py-2 d-none d-md-inline-block" href="#">Support</a>
        </div>
      </nav>
      
    )

}