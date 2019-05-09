<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Starter</title>

    <link rel="stylesheet" href="/starter/assets/styles/gulp-starter.css" />

    <style>
        body {
            background-color: #37afea !important;
        }

        .page-wrap {
            background: transparent;
        }

        .page-top {
            height: 100px;
            color: #fff;
            text-align: center;
        }

        .site-title {
            line-height: 100px;
        }

        .page-logo i {
            font-size: 30px;
        }

        .page-main-index {
            width: 1100px;
            margin: 0 auto 40px;
            padding: 50px;
            border-radius: 10px;
            background-color: #fff;
        }

        .pages {
            display: -webkit-flex;
            display: flex;
            -webkit-justify-content: flex-start;
            justify-content: flex-start;
            -webkit-flex-wrap: wrap;
            flex-wrap: wrap;
            -webkit-flex-direction: row;
            flex-direction: row;
        }

        .page {
            width: 25%;
            padding-right: 20px;
            margin-bottom: 20px;
        }

        h3 {
            margin-bottom: 0;
            font-size: 1.4rem;
        }

        .links {
            display: block;
            color: #222;
            font-size: 1.25rem;
        }

        a {
            text-decoration: none;
        }

    </style>
</head>
<body>

<div id="wrapper" class="page-wrap">
    <header id="masthead" class="page-top">
        <h1 class="site-title">
            <span class="page-logo">
                <i class="icon-turkcell"></i>
                Starter
            </span>
        </h1>
    </header>

    <div id="content" class="page-main-index">
        <div class="container">
            <div class="box">
                <h2>Sayfa Listesi</h2>
                <div class="pages">
                    {% for dir, files in pages -%}
                        <div class="page">
                            <h3>{{dir | title}}</h3>
                            {% for file in files -%}
                                <a href="./{{dir}}/{{file}}.html" target="_blank" class="links">{{file | title}}</a>
                            {% endfor %}
                        </div>
                    {% endfor %}
                </div>
            </div>
        </div>
    </div>
</div>
</body>
</html>