import database.Result;
import org.hibernate.Session;

import java.util.LinkedList;
import java.util.List;

//@ManagedBean
//@RequestScoped
public class MainBean {

    private double x;
    private double y;
    private double r;
    private List<Result> results;

    private String gsonY;
    private String gsonX;

    public void setX(double x) {
        this.x = x;
    }

    public void setR(double r) {
        this.r = r;
    }

    public void setY(double y) {
        this.y = y;
    }

    public double getR() {
        return r;
    }

    public double getX() {
        return x;
    }

    public double getY() {
        return y;
    }

    public List<Result> getResults() {
        if (results == null) results = new LinkedList<Result>();
        addResult();
        results.add(new Result(1.0, 2.0, 3.0, areaCheck(1, 2, 3)));
        return results;
    }

    public void setResults(List<Result> results) {
        this.results = results;
    }


    private String areaCheck(double x, double y, double r) {

        boolean[] flag = {false, false, false};

        if ((x * x + y * y <= r * r) && (x >= 0 && x <= r / 2) && (y <= 0 && y >= -r / 2)) {
            flag[0] = true;
        }
        if ((y <= (x + r / 2)) && (x >= -r / 2 && x <= 0) && (y >= 0 && y <= r / 2)) {
            flag[1] = true;
        }
        if ((x <= 0 && x >= -r) && (y >= -r / 2 && y <= 0)) {
            flag[2] = true;
        }

        if (flag[0] || flag[1] || flag[2]) return "hit";

        return "missed";
    }

    public void addResult() {
        Session session = HibernateUtil.getSessionFactory().openSession();
        session.beginTransaction();
        Result result = new Result(1.0, 2.0, 3.0, "pidor");
        results.add(result);
        session.save(result);
        session.getTransaction().commit();

    }

    public String getGsonX() {
        gsonX = "[";

        /*
         * Тут не должно этого быть
         * */
        results = new LinkedList<Result>();
        results.add(new Result(1.0, 2.0, 3.0, areaCheck(1, 2, 3)));
        results.add(new Result(2.0, 2.0, 3.0, areaCheck(1, 2, 3)));
        results.add(new Result(0.0, -1.0, 3.0, areaCheck(1, 2, 3)));


        //проверка если пусто
        for (int i = 0; i < results.size(); i++) {
            gsonX = gsonX + results.get(i).getX();
            if (i < results.size() - 1) gsonX = gsonX + ",";
        }

        gsonX = gsonX + "]";
        return gsonX;
    }

    public String getGsonY() {
        gsonY = "[";

        /*
         * Тут не должно этого быть
         * */
        results = new LinkedList<Result>();
        results.add(new Result(1.0, 2.0, 3.0, areaCheck(1, 2, 3)));
        results.add(new Result(2.0, 2.0, 3.0, areaCheck(1, 2, 3)));
        results.add(new Result(0.0, -1.0, 3.0, areaCheck(1, 2, 3)));


        //проверка если пусто
        //добавить set...
        for (int i = 0; i < results.size(); i++) {
            gsonY = gsonY + results.get(i).getY();
            if (i < results.size() - 1) gsonY = gsonY + ",";
        }

        gsonY = gsonY + "]";
        return gsonX;
    }
}
