import Pic from "./Images";
import styles from "./v2.css";
const JobReqV2 = () => {
  return (
    <div className={styles.conatiner}>
      <div className={styles.img}>
        <Pic></Pic>
      </div>
      <h1 className={styles.title}>
        This <bold className={styles.bold}>Baggage handler</bold> Job <br />{" "}
        Requires These Skills <br /> Which Of them Do You Have?
      </h1>
      <div className={styles.btnCon}>
        <div>
          <button className={styles.btn}>Reliability</button>
          <button className={styles.btn}>Physical work</button>
        </div>
        <div>
          <button className={styles.btn}>Multitasking </button>
          <button className={styles.btn}>Attention to Detail</button>
        </div>
        <div>
          <button className={styles.btn}>Teamwork</button>
          <button className={styles.btn}>Problem Solving</button>
        </div>
        <div>
          <button className={styles.btn}>Organization</button>
          <button className={styles.btn}>Flexibility</button>
        </div>
      </div>
      <button className={styles.linkBtn}>Take Me Baggage Handler Job</button>
      <p className={styles.link}>I dont have most of these skills,<br/> take me back to search</p>
    </div>
  );
};

export default JobReqV2;
