import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';
import { store } from '../store';
import theme from '../theme/theme';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <Component {...pageProps} />
            </ThemeProvider>
        </Provider>
    );
}

export default MyApp;
