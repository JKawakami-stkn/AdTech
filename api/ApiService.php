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

    public function getSales($getcompany_data){

        $con = $this->connect();

        $sql    = "SELECT * FROM company_data WHERE 名 = '".$getcompany_data."'";
        $params = array();

        $stmt = $con->prepare($sql);
        $stmt->execute($params);

        $ret = array();

        while($result = $stmt->fetch(PDO::FETCH_ASSOC)) {

            $line = array();

            $line[] = $result['名'];
            $line[] = $result['年度'];
            $line[] = $result['月'];
            $line[] = $result['制服冬上'];
            $line[] = $result['制服冬下'];
            $line[] = $result['Yシャツ'];
            $line[] = $result['制服夏上'];
            $line[] = $result['制服夏下'];
            $line[] = $result['体操服上'];
            $line[] = $result['体操服下'];
            $line[] = $result['靴下'];
            $line[] = $result['シューズ'];
            $line[] = $result['帽子'];
            $line[] = $result['体操帽'];
            $line[] = $result['合計'];
        
            $ret[] = $line;
       }
       return $ret;
    }

}
