<?php

/**
 * ルーティング情報用クラス。
 * 自身を配列で保持している点に注意。
 * Class Route
 */
class ApiService
{
    /**
     * DB接続
     * @return PDO
     */
    private function connect(){
        // 文字化け対策
        $options = array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET CHARACTER SET 'utf8'");

        // データベースの接続
        try {
            $con = new PDO('mysql:host='.DB_HOST.';dbname='.DB_NAME, DB_USER, DB_PASSWORD, $options);
            $con->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch (PDOException $e) {
            echo $e->getMessage();
            exit;
        }
        return $con;
    }

    /**
     *会社名,県,緯度,経度を取得
     * @return array
     */
    public function getCompany(){

        $con = $this->connect();

        $sql    = "SELECT * FROM company";
        $params = array();

        $stmt = $con->prepare($sql);
        $stmt->execute($params);

        $ret = array();

        while($result = $stmt->fetch(PDO::FETCH_ASSOC)) {

            $line = array();

            $line[] = $result['lat'];
            $line[] = $result['lon'];
            $line[] = $result['name'];
            $line[] = $result['street_address_1'];

            $ret[] = $line;
        }

        return $ret;
    }
    
    public function getSales(＄get_company){
        
        $con = $this->connect();
        
        $sql    = "SELECT * FROM 売上毎売上 WHERE 店舗名 = ".＄get_company;
        $params = array();
        
        $stmt = $con->prepare($sql);
        $stmt->execute($params);
        
        $ret = array();
        
        while($result = $stmt->fetch(PDO::FETCH_ASSOC)) {
            
            $line = array();
            
            $line[] = $result['COL2'];
            $line[] = $result['lon'];
            $line[] = $result['company_name'];
            $line[] = $result['street_address_1'];
            
            $ret[] = $line;
       
        
    }

}
