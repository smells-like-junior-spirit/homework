import LayoutHeader from '../widgets/LayoutHeader/LayoutHeader';
import LayoutFooter from '../widgets/LayoutFooter/LayoutFooter';
import MainLayout from '../shared/layouts/MainLayout';
import { ThemeProvider } from '../shared/lib/theme/useTheme';

function App() {

  return (

    <ThemeProvider>
      <LayoutHeader />
      <MainLayout />
      <LayoutFooter />
    </ThemeProvider>
  )
}

export default App
