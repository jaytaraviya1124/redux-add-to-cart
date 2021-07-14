import Home from "../component/Home";
import { connect } from 'react-redux';
import { addTocart } from "../Services/Actions/actions";


const mapDispatchToProps = dispatch => ({
    addToCartHandler: data => dispatch(addTocart(data))

})
export default connect(mapStateToProps, mapDispatchToProps)(Home)
