import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

//Pages
import HomePage from "./pages/home";
import NotFoundPage from "./pages/404";
import TopicTest from "./pages/topic-test";
import ExamTest from "./pages/exam-test";
import SingleTest from "./pages/single-test";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/404" component={NotFoundPage}/>
        <Route exact path="/topic-test" component={TopicTest}/>
        <Route exact path="/topic-test/:topicId" component={SingleTest}/>
        <Route exact path="/exam-test" component={ExamTest}/>
        <Redirect to="/404" />
      </Switch>
    </Router>
  );
}

export default App;
