import java.net.HttpURLConnection;
import java.net.URL;

public class Conexao {

    private int limit = 50;
    private int ts;
    private String apikey = "";
    private String hash_marvel;

    public String hash_marvel(){
        ts = int(time());
        String pvt = "";

        String cripto = ((String) ts) + pvt + apikey;
        hash_marvel = DigestUtils.md5Hex(cripto);
        return hash_marvel;
    }

    public JSONObject abrirConexao(){
        hash_marvel = hash_marvel();
        String url = "https://gateway.marvel.com:443/v1/public/comics";
        URL urlObj = new URL(url);
        HttpURLConnection connection = (HttpURLConnection) urlObj.openConnection();

        connection.setRequestMethod("GET");
        connection.setRequestProperty(limit,ts,apikey,hash_marvel);
    }

}