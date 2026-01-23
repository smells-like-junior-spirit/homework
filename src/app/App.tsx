import LayoutHeader from '../widgets/LayoutHeader/LayoutHeader';
import LayoutFooter from '../widgets/LayoutFooter/LayoutFooter';
import MainLayout from '../shared/layouts/MainLayout';
import { ThemeProvider } from '../shared/lib/theme/useTheme';
import { Provider } from 'react-redux';
import { store } from '../app/providers/store/store'

function App() {

  return (
    <Provider store={store} >
      <ThemeProvider>
        <LayoutHeader />
        <MainLayout />
        <LayoutFooter />
      </ThemeProvider>
    </Provider>
  )
}

export default App
