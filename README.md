# Pluto TV Brasil — M3U automática

Este fork está configurado para gerar a playlist da **Pluto TV Brasil** usando o scraper deste projeto.

## Como gerar a playlist

1. Abra a aba **Actions** deste repositório.
2. Se o GitHub mostrar a opção, clique em **I understand my workflows, go ahead and enable them** para habilitar os workflows do fork.
3. Abra **Auto Pluto Update**.
4. Clique em **Run workflow** e confirme.
5. Aguarde a execução terminar com status verde.
6. Confira o arquivo gerado em `output/plutotv_br.m3u8`.

## URL RAW para o Vita IPTV

Depois que o primeiro workflow terminar e criar o arquivo, use:

```text
https://raw.githubusercontent.com/Yurihbo/pluto-tv-playlists/main/output/plutotv_br.m3u8
```

## Atualização automática

O GitHub Actions está programado para executar de hora em hora e atualizar o arquivo quando houver mudanças. Os tokens de reprodução podem expirar; por isso, a atualização periódica ajuda a evitar links antigos, mas não garante reprodução permanente nem elimina eventuais restrições regionais ou mudanças da Pluto TV.

## Região

A configuração solicita a região brasileira usando um endereço IP público geolocalizado no Brasil. A geolocalização usada pelo serviço pode variar conforme a base de dados da Pluto TV.

## Observações

- Este repositório gera uma playlist M3U8 estática no GitHub; não hospeda um servidor de atualização por requisição.
- A playlist só estará pronta depois da primeira execução bem-sucedida do workflow.
- O Vita IPTV precisa ter acesso à internet e suportar os formatos de stream retornados pela Pluto TV.
- A disponibilidade de canais depende do catálogo gratuito e da região da Pluto TV.

Baseado no projeto original de NasiLemakk e no scraper de 4v3ngR. Consulte as licenças e créditos dos projetos originais.
