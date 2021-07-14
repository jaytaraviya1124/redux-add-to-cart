import Home from "../component/Home";
import { connect } from 'react-redux';
import { addTocart } from "../Services/Actions/actions";
import { removeTocart } from "../Services/Actions/actions";

const mapStateToProps = State => ({
    data: State.cardItems
})
const mapDispatchToProps = dispatch => ({
    addToCartHandler:data=>dispatch(addTocart(data)),
    removeTocartHandler:data=>dispatch(removeTocart(data))
})
export default connect(null ,mapDispatchToProps)(Home)