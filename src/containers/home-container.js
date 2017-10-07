import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { showErrorToast, showSuccessToast } from '../actions/toastActions';
import ToastEx from '../components/ToastEx';

const mapStateToProps = (state) => {
    return (
        {
            toast: state.toast
        }
    )
}



const mapDispatchToProps = (dispatch) => {
    return {
        showSuccess: (data) => {
            dispatch(showSuccessToast(data))
        },
        showError: (data) => {
            dispatch(showErrorToast(data))
        }
    }
};

// const mapDispatchToProps = (dispatch) => {
//     return {
//         setName: (name) => {
//             dispatch(setName(name))
//         }
//     };
// };

const HomeContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(ToastEx));
// connect(mapStateToProps, mapDispatchToProps)(App);
export default HomeContainer;