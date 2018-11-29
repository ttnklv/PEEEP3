import org.hibernate.HibernateException;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

import javax.faces.bean.ManagedBean;

public class HibernateUtil {
    private static final SessionFactory sessionFactory = initHibernate();

    private static SessionFactory initHibernate() throws HibernateException {
        try {
            Class.forName("org.dom4j.io.STAXEventReader");
            Configuration cfg = new Configuration();
            return cfg.configure().buildSessionFactory();
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }
        return null;
    }
    public static SessionFactory getSessionFactory() {
        return sessionFactory;
    }
}