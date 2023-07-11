import styled from "styled-components";
import styles from "./v6.css"


const TjV6 = () => {
    return (
        <div className={styles.conatiner}>
            <h1 className={styles.tjTitle}>Totaljobs</h1>
            <p className={styles.title}>Freedom is finding the right job.
            <h5 className={styles.subtitle}>Find yours here.</h5></p>
            <form>
                <input className={styles.inputs} placeholder="Job title, skill or company"></input>
                <input className={styles.inputs} placeholder="Town, City or post code"></input>
                <button className={styles.btn}>Search</button>
            </form>
        </div>
    );
}

export default TjV6;