public class Comic {

    private int ID;
    private String titulo;
    private String descricao;
    private Image imagem;

    public Comic() { }

    Comic(int ID, String titulo, String descricao, Image imagem) {
        this.ID = ID;
        this.titulo = titulo;
        this.descricao = descricao;
        this.imagem = imagem;
    }

    public int getID () {
        return ID;
    }

    public void setID ( int ID){
        this.ID = ID;
    }

    public String getTitulo () {
        return titulo;
    }

    public void setTitulo (String titulo){
        this.titulo = titulo;
    }

    public String getDescricao () {
        return descricao;
    }

    public void setDescricao (String descricao){
        this.descricao = descricao;
    }

    public Image getImagem() {
        return imagem;
    }

    public void setImagem(Image imagem) {
        this.imagem = imagem;
    }

    public boolean equals (Object object){
        if (this == object) return true;
        if (!(object instanceof Comic)) return false;
        if (!super.equals(object)) return false;
        Comic comic = (Comic) object;
        return ID == comic.ID && java.util.Objects.equals(titulo, comic.titulo) && java.util.Objects.equals(descricao, comic.descricao);
    }

    public int hashCode () {
        return Objects.hash(super.hashCode(), ID, titulo, descricao);
    }