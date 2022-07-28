import Button from "./Button"; //button.js에서 버튼 컴포 가져옴
import styles from "./App.module.css";

function App() {
  return (
    <div>
      <h1 className={styles.title}>welcome back!</h1>
      <Button text={"Continue"} />
    </div>
  );
}

export default App;
 