import Header from "../component/Header";
import { connect } from 'react-redux';
import { addTocart } from "../Services/Actions/actions";

const mapStateToProps = State => ({
    data: State.cardItems


})
export default connect(mapStateToProps)(Header)