package database;

import javax.persistence.*;

@Entity
public class Result {
    private Integer id;
    private Double x;
    private Double y;
    private Double r;
    private String answer;

    @Id
    @Column(name = "id", nullable = false)
    @GeneratedValue(strategy=GenerationType.AUTO)
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    @Basic
    @Column(name = "x", nullable = false, precision = 0)
    public Double getX() {
        return x;
    }

    public void setX(Double x) {
        this.x = x;
    }

    @Basic
    @Column(name = "y", nullable = false, precision = 0)
    public Double getY() {
        return y;
    }

    public void setY(Double y) {
        this.y = y;
    }

    @Basic
    @Column(name = "r", nullable = false, precision = 0)
    public Double getR() {
        return r;
    }

    public void setR(Double r) {
        this.r = r;
    }

    @Basic
    @Column(name = "answer", nullable = false, length = -1)
    public String getAnswer() {
        return answer;
    }

    public void setAnswer(String answer) {
        this.answer = answer;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Result result = (Result) o;

        if (id != null ? !id.equals(result.id) : result.id != null) return false;
        if (x != null ? !x.equals(result.x) : result.x != null) return false;
        if (y != null ? !y.equals(result.y) : result.y != null) return false;
        if (r != null ? !r.equals(result.r) : result.r != null) return false;
        if (answer != null ? !answer.equals(result.answer) : result.answer != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = id != null ? id.hashCode() : 0;
        result = 31 * result + (x != null ? x.hashCode() : 0);
        result = 31 * result + (y != null ? y.hashCode() : 0);
        result = 31 * result + (r != null ? r.hashCode() : 0);
        result = 31 * result + (answer != null ? answer.hashCode() : 0);
        return result;
    }

    public Result(){}

    public Result(Double x, Double y, Double r, String answer) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.answer = answer;
    }
}
