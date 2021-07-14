import Header from "../component/Header";
import { connect } from 'react-redux';


const mapStateToProps = State => ({
    data: State.cardItems

})
const mapDispatchToProps = dispatch => ({
 
})
export default connect(mapStateToProps, mapDispatchToProps)(Header)