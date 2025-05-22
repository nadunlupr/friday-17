import { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import App from './App';
import LessonDetails from './components/LessonDetails';
import CreateNews from './components/create-news/CreateNews';
import SuccessPage from './components/shared/SuccessPage';
import Home from './components/home/Home';
import Counter from './components/counter/Counter';

class AppRouter extends Component {
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App />} >
                        <Route index element={<Home />} />
                        <Route path="lesson" element={<LessonDetails />} />
                        <Route path='news-create' element={<CreateNews />} />
                        <Route path='success/:recordId' element={<SuccessPage />} />
                        <Route path='counter' element={<Counter />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        )
    }
}

export default AppRouter;