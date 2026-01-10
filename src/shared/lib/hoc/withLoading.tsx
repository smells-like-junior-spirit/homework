
const withLoading = (WrappedComponent: any) => {
    return function ComponentWithLoading({ isLoading, ...props }: any) {
        if (isLoading) {
            return (
                <div>Идёт загрузка...</div>
            )
        }
        return (
            <WrappedComponent {...props}></WrappedComponent>
        )
    }
}

export default withLoading;