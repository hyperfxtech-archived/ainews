// import { url } from 'inspector'
// import { replaceAt } from 'react-range/lib/utils'

export default () => {
  return (
    <div
      className="jumbotron jumbotron-fluid "
      style={{
        background: 'url("static/img/bg.jpeg") no-repeat center center fixed '
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-3">
            <img style={{ width: '10em' }} src="../static/img/bee.png" />
          </div>

          <div className="col-9 " style={{ color: 'white' }}>
            <h1 className="display-4">HyperFX Tech website </h1>
            <p className="lead">
              This is a modified jumbotron that occupies the entire horizontal
              space of its parent.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
