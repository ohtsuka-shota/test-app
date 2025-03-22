const chapter01 = [
    {
      question: "VPCとは何の略ですか？",
      options: ["Virtual Private Cloud", "Virtual Public Cloud", "Virtual Protected Cloud", "Virtual Private Cluster"],
      answer: "Virtual Private Cloud"
    },
    {
      question: "VPCの最大CIDRブロックサイズは何ですか？",
      options: ["/16", "/28", "/24", "/32"],
      answer: "/16"
    },
    {
      question: "サブネットとは何ですか？",
      options: ["VPCの中の小さなネットワーク", "AWSリージョン", "インターネットゲートウェイ", "EC2インスタンス"],
      answer: "VPCの中の小さなネットワーク"
    },
    {
      question: "プライベートサブネット内のEC2インスタンスがインターネットにアクセスするために必要なものは何ですか？",
      options: ["NATゲートウェイ", "インターネットゲートウェイ", "セキュリティグループ", "ルートテーブル"],
      answer: "NATゲートウェイ"
    },
    {
      question: "ルートテーブルは何を制御しますか？",
      options: ["ネットワークトラフィックのルーティング", "セキュリティルール", "EC2インスタンスの起動", "AMIの管理"],
      answer: "ネットワークトラフィックのルーティング"
    },
    {
      question: "インターネットゲートウェイの主な役割は何ですか？",
      options: ["VPCをインターネットに接続する", "VPCを他のVPCに接続する", "サブネットを作成する", "セキュリティグループを管理する"],
      answer: "VPCをインターネットに接続する"
    },
    {
      question: "セキュリティグループは何を制御しますか？",
      options: ["インスタンスへのインバウンドおよびアウトバウンドトラフィック", "VPCのルーティング", "サブネットのCIDR", "EC2の料金"],
      answer: "インスタンスへのインバウンドおよびアウトバウンドトラフィック"
    },
    {
      question: "EC2インスタンスを起動するために必要なものはどれですか？",
      options: ["AMI", "S3バケット", "RDSインスタンス", "Lambda関数"],
      answer: "AMI"
    },
    {
      question: "AMIとは何の略ですか？",
      options: ["Amazon Machine Image", "Amazon Managed Instance", "Amazon Micro Instance", "Amazon Machine Instance"],
      answer: "Amazon Machine Image"
    },
    {
      question: "EC2インスタンスのサイズを変更するために必要な手順はどれですか？",
      options: ["インスタンスを停止してからサイズを変更する", "インスタンスを削除して新しいサイズで作成する", "直接サイズを変更する", "AMIを変更する"],
      answer: "インスタンスを停止してからサイズを変更する"
    },
    {
      question: "VPCピアリングとは何ですか？",
      options: ["異なるVPC間でのネットワーク接続", "VPCとインターネットの接続", "VPC内のサブネット間の接続", "VPCとオンプレミスネットワークの接続"],
      answer: "異なるVPC間でのネットワーク接続"
    },
    {
      question: "セキュリティグループのルールはどのレベルで適用されますか？",
      options: ["インスタンスレベル", "VPCレベル", "サブネットレベル", "リージョンレベル"],
      answer: "インスタンスレベル"
    },
    {
      question: "デフォルトVPCに存在するサブネットはどのタイプですか？",
      options: ["パブリックサブネット", "プライベートサブネット", "NATサブネット", "VPNサブネット"],
      answer: "パブリックサブネット"
    },
    {
      question: "EC2インスタンスのセキュリティグループを変更するときに必要な手順はどれですか？",
      options: ["インスタンスを停止する必要はない", "インスタンスを停止する必要がある", "インスタンスを再起動する必要がある", "インスタンスを削除して再作成する必要がある"],
      answer: "インスタンスを停止する必要はない"
    },
    {
      question: "EC2インスタンスが特定のIPアドレスで起動するために使用するのはどれですか？",
      options: ["Elastic IP", "NATゲートウェイ", "インターネットゲートウェイ", "VPCエンドポイント"],
      answer: "Elastic IP"
    }
  ];
  
  export default chapter01;