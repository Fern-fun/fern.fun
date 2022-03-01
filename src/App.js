import Widget from "./components/Widget/Widget";
import WidgetPanel from "./components/Widget/WidgetPanel";

function App() {
  return (
    <div className="App">
      <WidgetPanel>
        <Widget type="logo" />
        <Widget type="time" />
        <Widget type="github" />
        <Widget type="mail" />
        <Widget type="apiStatus" />
        {/* <Widget type="footer" /> */}
      </WidgetPanel>
    </div>
  );
}

export default App;
