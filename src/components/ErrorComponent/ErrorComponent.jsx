const ErrorComponent = ({error}) => {

    return (
        <h2>
            Ooops! {error.response.status} {error.response.data.msg} 
        </h2>
    )
}

export default ErrorComponent