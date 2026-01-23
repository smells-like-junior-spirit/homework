import { type ComponentType, type PropsWithChildren } from "react"

interface WithLoadingProps {
    isLoading: boolean
}

const withLoading = <T extends object>(WrappedComponent: ComponentType<T>) => {
    return function ComponentWithLoading({ isLoading, ...props }:
        PropsWithChildren<T & WithLoadingProps>) {
        if (isLoading) {
            return (
                <div>Идёт загрузка...</div>
            )
        }
        return (
            <WrappedComponent {...props as T}></WrappedComponent>
        )
    }
}

export default withLoading;