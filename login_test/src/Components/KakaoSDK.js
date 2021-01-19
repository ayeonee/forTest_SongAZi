import React from 'react';

const SDK =() => {
    return(
        <div>
            <script src="https://developers.kakao.com/sdk/js/kakao.js"></script>
            <script>
                Kakao.init('d61079c156018c7a8055d9a015191dfa');
                console.log(Kakao.isInitialized());
            </script>
        </div>
    );
}

export default SDK;